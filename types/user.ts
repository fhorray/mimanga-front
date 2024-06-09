export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  discordId?: string;
  provider: string;
  favoriteMangas: string[];
}
