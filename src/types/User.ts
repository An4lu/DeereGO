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
      tempoTotal: number;
      totalCarrinhos: number;
      statusRebocador: string;
      carrinhos?: {
        _id: string;
        pecas: string;
        posX: number;
        posY: number;
        local: string;
        statusManuntencao: string;
        nomeCarrinho: string;
        statusCapacidade: string;
        entregas?: Array<{
          _id: string;
          partida: string;
          destino: string;
          horaPartida: string;
          horaEntrega: string;
          status: string;
          idCarrinho: string;
        }>;
      };
    }>;
  };
  