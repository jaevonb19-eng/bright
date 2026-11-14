export type Review = { name: string; date: string; text: string; source: string };

const MARKETPLACE = "Facebook Marketplace feedback";

// Verbatim from the owner's Facebook Marketplace seller reviews (all 5 stars).
export const REVIEWS: Review[] = [
  { name: "Nicholas", date: "Oct 28, 2026", source: MARKETPLACE, text: "I’ve bought 2 gaming pcs from this gentleman I do plan on buying a 3rd eventually and it’ll probably be from him agian both times I…" },
  { name: "Benjamin", date: "Oct 6, 2026", source: MARKETPLACE, text: "Great communication" },
  { name: "Haley", date: "May 1, 2026", source: MARKETPLACE, text: "absolutely amazing!!! was very educational regarding the pc to make sure it fit my needs. i’d buy from him again and again!!!!" },
  { name: "Ryley", date: "Mar 30, 2026", source: MARKETPLACE, text: "Pc was exactly as described. Seller was really friendly and open about everything. When received a small issue occurred and he offered to…" },
  { name: "Duane", date: "Jan 19, 2026", source: MARKETPLACE, text: "Great job, good pricing, and through.  I let him know what I needed, what for, and he delivered a solid product." },
  { name: "Casey", date: "Jan 12, 2026", source: MARKETPLACE, text: "Best seller I’ve bought smt from marketplace no cap" },
  { name: "Anthony", date: "Mar 15, 2024", source: MARKETPLACE, text: "Very smooth transaction 10/10 buy from again" },
  { name: "Kelly", date: "Jan 17, 2022", source: "Facebook Marketplace feedback · auto sales", text: "My experience was great with auto sales .. […] they r real peeps and down to earth .. good vibes all day …" },
];
