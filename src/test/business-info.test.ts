import { describe, expect, it } from "vitest";

import { BUSINESS, buildLocalBusinessJsonLd } from "@/lib/business";

// Lenders and Apple Business check that name, address, phone and email match everywhere.
describe("business listing details", () => {
  const ld = buildLocalBusinessJsonLd();

  it("lists the legal business name", () => {
    expect(ld.legalName).toBe("Amelia Tech & Auto LLC");
  });

  it("lists the business address at 220 5th St, Elyria, OH 44035", () => {
    expect(ld.address).toMatchObject({
      streetAddress: "220 5th St",
      addressLocality: "Elyria",
      addressRegion: "OH",
      postalCode: "44035",
    });
    expect(BUSINESS.addressLine).toBe("220 5th St, Elyria, OH 44035");
  });

  it("lists the business phone (440) 453-1371", () => {
    expect(ld.telephone).toBe("+1-440-453-1371");
    expect(BUSINESS.phoneE164).toBe("+14404531371");
  });

  it("lists the business email", () => {
    expect(ld.email).toBe("jaevonbell@ameliatechauto.com");
  });

  it("is open Monday to Saturday, 9 AM to 6 PM", () => {
    const [hours] = ld.openingHoursSpecification;
    expect(hours).toMatchObject({ opens: "09:00", closes: "18:00" });
    expect(hours?.dayOfWeek).toHaveLength(6);
  });
});
