export interface UserProfileStats {
  followersTotal: number;
  likesTotal: number;
  photosTotal: number;
}

export interface UserProfile {
  firstname: string;
  lastname: string;
  age: number;
  country: string;
  photo: string;
  stats: UserProfileStats;
}
