interface Room {
  name: string;
  topic: string;
  count: number;
  worktime: number;
  breaktime: number;
  breakcount: number;
  members: string[];
  maintimer: Date;
  simpletimer: Date;
  createdAt: Date;
  updatedAt: Date;
}
