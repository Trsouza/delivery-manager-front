export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf?: string;
  cnpj?: string;
  roles: string[];
}
