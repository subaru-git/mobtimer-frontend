interface Room {
  name: string;
  topic: string;
  worktime: number;
  breaktime: number;
  breakcount: number;
  members: string[];
  maintimer: Date;
  createdAt: Date;
  updatedAt: Date;
}
