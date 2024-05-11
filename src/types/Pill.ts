export type Pill = {
  id: number;
  medicineTitle: string;
  pharmacy: string;
  price: number;
  pillImg: string;
};

export type CartPill = Pill & {
  quantity: number;
};
