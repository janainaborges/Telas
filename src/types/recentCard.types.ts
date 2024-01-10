export interface RecentCardProps {
  data: {
    image: any;
    title: string;
    percentage: number;
    color: string;
  }[];
}

export interface CarouselCardProps {
  image: any;
  title: string;
  percentage: number;
  color: string | undefined;
}
