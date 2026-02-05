[English](./README.md) | [Español](./README.es.md) | [Português](./README.pt.md)

# Puente

Plataforma de remessas P2P para América Latina construída na blockchain Celo.

<!-- CTAs -->
<p align="center">
  <a href="https://github.com/LuisSambrano/puente-fintech-dapp/stargazers"><img src="https://img.shields.io/github/stars/LuisSambrano/puente-fintech-dapp?style=flat-square" alt="Stars"/></a>
  <a href="https://github.com/LuisSambrano/puente-fintech-dapp/network/members"><img src="https://img.shields.io/github/forks/LuisSambrano/puente-fintech-dapp?style=flat-square" alt="Forks"/></a>
  <a href="https://github.com/LuisSambrano/puente-fintech-dapp/issues"><img src="https://img.shields.io/github/issues/LuisSambrano/puente-fintech-dapp?style=flat-square" alt="Issues"/></a>
  <a href="https://github.com/LuisSambrano/puente-fintech-dapp/blob/main/LICENSE"><img src="https://img.shields.io/github/license/LuisSambrano/puente-fintech-dapp?style=flat-square" alt="License"/></a>
</p>

> [!IMPORTANT] > **Licencia**: Este proyecto está licenciado bajo [Business Source License 1.1](LICENSE).
> Puedes ver y estudiar el código fuente con fines educativos, pero **el uso comercial requiere una licencia separada**.
> Ver [LICENSE](LICENSE) para términos completos.

## Arquitetura

```mermaid
graph TD
    A[Frontend Next.js 14] --> B[Capa de Auth Privy]
    B --> C[Carteira Embutida]

    A --> D[Backend Supabase]
    D --> E[Banco de Dados PostgreSQL]
    D --> F[Edge Functions]

    C --> G[Rede Celo L2]
    G --> H[Stablecoin cUSD]
    G --> I[Smart Contracts]

    A --> J[SocialConnect/ODIS]
    J --> K[Mapeamento Telefone-Endereço]

    I --> L[Contrato de Remessas]
    I --> M[Contrato de Escrow]

    style G fill:#FCFF52,stroke:#000,color:#000
    style H fill:#FCFF52,stroke:#000,color:#000
    style A fill:#000,stroke:#fff,color:#fff
    style D fill:#3ECF8E
```

## Características

### Integração Blockchain

- **Liquidação Celo L2**: Finalidade rápida (<5s)
- **Stablecoin cUSD**: Proteção contra volatilidade da moeda local
- **Smart Contracts**: Contratos verificados na Celo Sepolia para roteamento seguro de fundos
- **Abstração de Gas**: Taxas de transação abaixo de $0.01

### Identidade e Descoberta

- **SocialConnect**: Mapeamento telefone-endereço via ODIS
- **Descoberta Social**: Envie fundos usando números de telefone em vez de endereços de carteira
- **Preservação de Privacidade**: Lookup de identidade descentralizado sem expor dados do usuário

### Experiência do Usuário

- **Glassmorphism UI**: Interface translúcida moderna com profundidade e hierarquia
- **Temas Dinâmicos**: Suporte a modo claro/escuro (temas Solaris/Obsidian)
- **Controles de Privacidade**: Saldos sensíveis obscurecidos por padrão até autenticação
- **Mobile-First**: PWA otimizada para MiniPay (Opera Mini) e redes de baixa largura de banda

### Segurança

- **Não-Custodial**: Usuários mantêm controle total de seus fundos
- **Autenticação Privy**: Carteiras embutidas com suporte a passkey
- **Log de Auditoria**: Histórico de transações em tempo real via Supabase
- **Verificação de Smart Contract**: Todos contratos verificados no explorador de blocos Celo

## Stack Tecnológico

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Celo](https://img.shields.io/badge/Celo-FCFF52?style=flat&logo=celo&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)

**Frontend**:

- [Next.js 14](https://nextjs.org/) - Framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) - Desenvolvimento type-safe
- [Tailwind CSS](https://tailwindcss.com/) - Estilos utility-first
- [Framer Motion](https://www.framer.com/motion/) - Animações aceleradas por hardware

**Blockchain**:

- [Celo](https://celo.org/) - Rede blockchain L2 (Sepolia testnet)
- [cUSD](https://docs.celo.org/protocol/stability) - Stablecoin Celo Dollar
- [SocialConnect](https://docs.celo.org/protocol/identity) - Protocolo de identidade descentralizada
- [ODIS](https://docs.celo.org/protocol/identity/odis) - Serviço de identidade descentralizada oblivious

**Infraestrutura**:

- [Privy](https://privy.io/) - Autenticação de carteira embedded
- [Supabase](https://supabase.com/) - Banco de dados PostgreSQL e Edge Functions
- [Vercel](https://vercel.com/) - Deploy em rede edge

## Primeiros Passos

### Pré-requisitos

- Node.js 18 ou superior
- Gerenciador de pacotes pnpm
- Conta Privy (tier gratuito disponível)
- Conta Supabase (tier gratuito disponível)
- Carteira Celo com cUSD testnet (para testes)

### Instalação

1. **Clonar o repositório**:

```bash
git clone https://github.com/LuisSambrano/puente.git
cd puente
```

2. **Instalar dependências**:

```bash
pnpm install
```

3. **Configurar variáveis de ambiente**:

Criar um arquivo `.env.local` no diretório raiz:

```env
NEXT_PUBLIC_PRIVY_APP_ID=seu_privy_app_id
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_supabase
NEXT_PUBLIC_CELO_NETWORK=celo-sepolia
```

4. **Executar servidor de desenvolvimento**:

```bash
pnpm dev
```

## Contribuir

Contribuições são bem-vindas. Por favor siga estas diretrizes:

1. Faça fork do repositório
2. Crie uma branch de feature: `git checkout -b feature/descricao`
3. Faça suas alterações com commits claros e atômicos
4. Execute testes: `pnpm test`
5. Push para seu fork: `git push origin feature/descricao`
6. Envie um pull request com descrição detalhada

## Estrutura do Projeto

```
puente/
├── apps/
│   ├── web/                    # Aplicação frontend Next.js
│   │   ├── src/
│   │   │   ├── app/           # Páginas App Router
│   │   │   ├── components/    # Componentes React
│   │   │   ├── lib/           # Utilidades e configurações
│   │   │   └── types/         # Definições TypeScript
│   │   └── public/            # Assets estáticos
│   └── contracts/             # Desenvolvimento de smart contracts
│       ├── contracts/         # Contratos Solidity
│       ├── scripts/           # Scripts de deploy
│       └── test/              # Testes de contratos
├── docs/                      # Documentação
├── brandkit/                  # Assets de marca
└── turbo.json                 # Configuração Turborepo
```

## 🔬 Pesquisa e Registro de Decisões

Este projeto segue uma metodologia **Research-First**. Todas as decisões estratégicas estão documentadas:

| Documento                                     | Propósito                                      |
| --------------------------------------------- | ---------------------------------------------- |
| [KEY_FINDINGS.md](./research/KEY_FINDINGS.md) | Insights destilados da pesquisa                |
| [prompts/](./research/prompts/)               | Módulos de investigação com tracking           |
| [docs/](./docs)                               | Documentos originais de pesquisa (26 arquivos) |

> **Resumo Executivo**: Veja [KEY_FINDINGS.md](./research/KEY_FINDINGS.md) para insights destilados e decisões arquitetônicas.

## Licença

Licença MIT - Veja [LICENSE](LICENSE) para detalhes.

## Links

- **Repositório**: [github.com/LuisSambrano/puente](https://github.com/LuisSambrano/puente)
- **Autor**: [Luis Sambrano](https://github.com/LuisSambrano)
- **Documentação**: [docs/](./docs)
- **Pesquisa**: [research/](./research)
- **Documentação Celo**: [docs.celo.org](https://docs.celo.org)

---

[English](./README.md) | [Español](./README.es.md) | **Português**
