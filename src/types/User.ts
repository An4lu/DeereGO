export type User = {
    _id: string;
    nome: string;
    senha?: string;
    email: string;
    role: string;
    fabrica?: string;
    telefone?: string;
    status?: boolean;
};
