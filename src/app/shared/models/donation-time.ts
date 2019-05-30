// TODO: Разделить логику админки и пользовательской части

export interface DonationTime {
  id: string;
  pointId: string;
  pointName: string;
  date: Date;
  donorsQuantity?: number;
  isStopped?: boolean;
}

