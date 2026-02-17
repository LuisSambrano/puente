/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { describe, it, expect } from "vitest";
import { isValidE164PhoneNumber } from "./validation";

describe("isValidE164PhoneNumber", () => {
  it("should return true for valid E.164 phone numbers", () => {
    expect(isValidE164PhoneNumber("+14155552671")).toBe(true);
    expect(isValidE164PhoneNumber("+442071838750")).toBe(true);
    expect(isValidE164PhoneNumber("+551155256325")).toBe(true);
    expect(isValidE164PhoneNumber("+12")).toBe(true);
  });

  it("should return false for invalid phone numbers", () => {
    expect(isValidE164PhoneNumber("14155552671")).toBe(false); // Missing +
    expect(isValidE164PhoneNumber("+")).toBe(false); // Missing digits
    expect(isValidE164PhoneNumber("+0123456789")).toBe(false); // CC starts with 0
    expect(isValidE164PhoneNumber("+1234567890123456")).toBe(false); // Too long (>15 digits)
    expect(isValidE164PhoneNumber("+123-456-7890")).toBe(false); // Contains dashes
    expect(isValidE164PhoneNumber("invalid")).toBe(false); // Text
    expect(isValidE164PhoneNumber("")).toBe(false); // Empty
  });
});
