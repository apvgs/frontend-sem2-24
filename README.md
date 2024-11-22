# **SmartConsumo**

## **Link do Projeto no Vercel**  
[SmartConsumo - Vercel](https://smartconsume.vercel.app)

---

## **Como Iniciar o Projeto**

### **1. Iniciar o Back-End Java**  
Antes de acessar a aplicação front-end, certifique-se de que o servidor back-end em Java esteja em execução.

#### **Passos para Configurar o Java:**

1. **Abrir o Projeto Java:**  
   ![Abrir o Projeto Java](https://github.com/user-attachments/assets/c56d669f-2df9-402a-aae5-4dd6034eaa18)

2. **Acessar 'Current File':**  
   ![Ir em Current File](https://github.com/user-attachments/assets/fd5f7238-c175-4908-a412-ab2ff54cb8a8)

3. **Editar Configurações:**  
   ![Edit Configurations](https://github.com/user-attachments/assets/962108c1-aae1-475b-9b3e-094e1b45eb45)

4. **Adicionar Nova Configuração:**  
   ![Add New](https://github.com/user-attachments/assets/f5dc5048-5962-475a-9445-6546036792c3)

5. **Selecionar Tomcat:**  
   ![Selecionar Tomcat](https://github.com/user-attachments/assets/442a4a35-3b7d-45e8-ae51-85f99d0ef66e)

6. **Configurar Tomcat:**  
   ![Configurar Tomcat](https://github.com/user-attachments/assets/d0e1b0df-9173-42c5-980f-d33462c79a65)  
   - Selecione o diretório onde o Tomcat está instalado e clique em **OK**.

7. **Adicionar Maven:**  
   ![Adicionar Maven](https://github.com/user-attachments/assets/ab7eb677-0b90-48c0-bd95-4c8a0465b702)  
   - Clique no botão de adicionar e escolha **Maven run goal**.

8. **Definir Comando Maven:**  
   ![Configurar Maven](https://github.com/user-attachments/assets/b5548a4a-3caf-4284-b934-91fecb7a6205)  
   - Digite `clean install` e clique em **OK**.

9. **Configurar 'Deployment':**  
   ![Configurar Deployment](https://github.com/user-attachments/assets/6483e14d-b0ac-4b3f-946b-d213b1814e38)  
   - Clique em **+**, selecione **artifact** e escolha o arquivo `gs-sem-2-24:war`.

10. **Remover 'Application Context':**  
    ![Remover Application Context](https://github.com/user-attachments/assets/d76c1fa3-6791-4c39-95b5-c8c73359fbfd)  
    - Apague o conteúdo do campo **application context**.

11. **Aplicar Configurações e Executar:**  
    ![Executar Backend](https://github.com/user-attachments/assets/cb840879-36f6-4300-b0f3-df147ffdc3c2)  
    - Clique em **Apply** e depois em **Run**.

Pronto! O servidor back-end estará rodando.  

---

## **Objetivo do Projeto**  

O principal objetivo do **SmartConsumo** é fornecer uma ferramenta acessível para monitoramento de energia. Através de dispositivos IoT e análises em tempo real, os usuários poderão identificar padrões de consumo, evitar desperdícios e otimizar o uso de energia em suas casas.  

O sistema inclui:  
- Visualizações gráficas detalhadas.  
- Análises personalizadas para maior eficiência.  
- Alertas para consumo excessivo.

---

## **Tecnologias Utilizadas**  

- **Front-End:** Next.js com TypeScript  
- **Back-End:** Java (com suporte a Tomcat e Maven)  
- **Banco de Dados:** Oracle SQL Developer  

---

## **Estrutura do Projeto**

### **Front-End**  
Desenvolvido com Next.js e TypeScript, oferecendo uma experiência de usuário interativa e responsiva.

### **Back-End**  
Criado em Java, responsável por processar as requisições e fornecer os dados ao front-end.

### **Banco de Dados**  
Gerenciado pelo Oracle SQL Developer para armazenamento e manipulação de dados.

---

## **Páginas do Projeto**

### **Tela Inicial**  
![Tela Inicial](https://github.com/user-attachments/assets/c9077d02-613f-42fb-9d78-8a83b264b641)

### **Tela dos Desenvolvedores**  
![Tela dos Desenvolvedores](https://github.com/user-attachments/assets/c56723b3-7db5-40ad-b363-9812121f2a8d)

### **Tela de Login**  
![Tela de Login](https://github.com/user-attachments/assets/68e0cd74-3516-4150-b01e-cc3fa2a82b72)

### **Tela de Cadastro**  
![Tela de Cadastro](https://github.com/user-attachments/assets/2abe0bc6-153e-4901-902e-485d050a6d60)

### **Dashboard**  
![Dashboard](https://github.com/user-attachments/assets/7b4ac51b-1f0b-4ad4-8c8f-30e7ec0eade5)

### **Tela dos Dispositivos Cadastrados**  
![Dispositivos Cadastrados](https://github.com/user-attachments/assets/0548024c-6856-48a0-80bb-80c37ebefc69)

### **Tela para Editar um Dispositivo**  
![Editar Dispositivo](https://github.com/user-attachments/assets/0cc0c5a4-3e59-4cf4-820c-c285294aad6d)

### **Tela para Adicionar um Dispositivo**  
![Adicionar Dispositivo](https://github.com/user-attachments/assets/91cb34d0-4f8c-46ad-a9c5-0abac05619ef)

### **Tela de Estatísticas**  
![Estatísticas](https://github.com/user-attachments/assets/33a8d420-a154-46cb-80fa-9e3133cb971b)

### **Tela de Notificações** 
![Notificações](https://github.com/user-attachments/assets/458536a5-1ed4-41ad-90cf-c5bd0c08c6d4)
