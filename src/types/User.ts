export type User = {
    id: string;
    nome: string;
    email: string;
    role: string;
    fabrica?: string;
    telefone?: string | number;
    status?: boolean;
    rebocadores?: Array<{
      _id: string;
      TempoTotal: number;
      TotalCarrinhos: number;
      statusRebocador: string;
      carrinhos?: {
        _id: string;
        pecas: string;
        posX: number;
        posY: number;
        local: string;
        statusManuntencao: string;
        NomeCarrinho: string;
        statusCapacidade: string;
        entregas?: Array<{
          _id: string;
          Partida: string;
          Destino: string;
          HoraPartida: string;
          HoraEntrega: string;
          status: string;
          IdCarrinho: string;
        }>;
      };
    }>;
  };
  