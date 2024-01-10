export interface ListCustomI {
  popular: boolean;
  border: boolean;
  data: {
    image: any;
    color: string;
    title: string;
    key: number;
    describe: string;
  };
}

export interface ListCustomP {
  popular: boolean;
  border: boolean;
  data: {
    image: any;
    color: string;
    title: string;
    key: number;
    describe: string;
  }[];
}
