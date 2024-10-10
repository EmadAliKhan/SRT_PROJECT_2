import { Contact } from "../models/Contact.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const ContactMessage = asyncHandler(async (req, res) => {
  const { firstName, lastName, phoneNumber, email, City, province, message } =
    req.body;

  try {
    if (
      !(
        firstName &&
        lastName &&
        phoneNumber &&
        email &&
        City &&
        province &&
        message
      )
    ) {
      throw new ApiError(400, "All fields are Required...!");
    }

    const contact = await Contact.create({
      firstName,
      lastName,
      phoneNumber,
      email,
      City,
      province,
      message,
    });

    return res
      .status(201)
      .json(new ApiResponse(200, contact, "Message send Successfully..."));
  } catch (error) {
    throw new ApiError(404, error.message);
  }
});

export { ContactMessage };
