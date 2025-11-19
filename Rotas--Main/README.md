# 🚀 Estudo de Caso: Rotas em Aplicações Web e Mobile

Este projeto é um estudo de caso prático que visa consolidar o conhecimento sobre a implementação de rotas e navegação em diferentes plataformas, simulando uma aplicação de listagem e detalhes de produtos.

O projeto está dividido em dois diretórios principais:
1.  **`web/`**: Aplicação front-end desenvolvida com React e Vite.
2.  **`mobile/`**: Aplicação móvel desenvolvida com React Native e Expo.

---

## ⚙️ 1. Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo para as duas plataformas:

### Pré-requisitos
* Node.js (versão LTS recomendada)
* npm (ou yarn)
* Expo Go app instalado no seu smartphone (para testar o mobile)

### 1.1. Aplicação Web (React + Vite)

A aplicação Web utiliza o **React Router DOM** para navegação.

1.  **Navegue para o diretório Web:**
    ```bash
    cd web
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O aplicativo estará acessível em `http://localhost:8081`.

### 1.2. Aplicação Mobile (React Native + Expo)

A aplicação Mobile utiliza o **React Navigation** (Stack Navigator) para navegação.

1.  **Navegue para o diretório Mobile:**
    ```bash
    cd mobile
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # Garanta que as dependências nativas estão instaladas:
    npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
    ```
3.  **Inicie o servidor Expo:**
    ```bash
    npx expo start --tunnel
    ```
4.  **Acesse o App:** Use o aplicativo **Expo Go** no seu celular para escanear o QR Code exibido no terminal (ou use o link `exp://` diretamente no navegador do seu celular).

---

## 🗺️ 2. Explicação das Rotas Implementadas

### 2.1. Web (`web/` - React Router DOM)

| Rota | Componente | Descrição |
| :--- | :--- | :--- |
| **`/`** | `Home.jsx` | Página inicial que exibe a lista completa de produtos e links de detalhes. |
| **`/product/:id`** | `ProductDetail.jsx` | Página de detalhes. O parâmetro `:id` é capturado via `useParams()` para buscar (simular) os dados do produto específico. |

### 2.2. Mobile (`mobile/` - React Navigation Stack)

| Rota (Screen Name) | Componente | Descrição |
| :--- | :--- | :--- |
| **`Home`** | `HomeScreen.js` | Tela principal que contém botões de navegação para os produtos. Passa o `productId` e `productName` como parâmetros. |
| **`Details`** | `DetailsScreen.js` | Tela de detalhes. Recebe os parâmetros do produto através de `route.params` para exibir as informações. |

---

## 💡 3. Organização do Projeto

* **`web/src/pages`**: Contém todos os componentes que representam páginas ou rotas inteiras.
* **`mobile/screens`**: Contém todos os componentes que representam telas inteiras para a navegação mobile.

---

## 📚 4. Créditos e Referências

* Criado como um estudo de caso para consolidação de conceitos de navegação Web e Mobile.
* Frameworks utilizados: React, Vite, React Native, Expo, React Router DOM, React Navigation.