/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

/**
 * Validates if a string is a valid E.164 phone number.
 * Format: +[1-9] followed by 1 to 14 digits.
 * Example: +1234567890
 *
 * @param phoneNumber - The phone number to validate.
 * @returns True if the phone number is valid E.164, false otherwise.
 */
export function isValidE164PhoneNumber(phoneNumber: unknown): boolean {
  if (typeof phoneNumber !== "string") {
    return false;
  }
  const e164Regex = /^\+[1-9]\d{1,14}$/;
  return e164Regex.test(phoneNumber);
}
