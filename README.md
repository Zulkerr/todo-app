# TODO-App

## ✨ Projektbeschreibung

Diese TODO-App ermöglicht es Nutzern, Aufgaben hinzuzufügen, anzuzeigen, zu aktualisieren und zu löschen. Sie verwendet den **MERN-Stack** (MongoDB, Express, React, Node.js) und erlaubt eine einfache Verwaltung von To-Dos.

## ⚙ Technologien

- **Frontend:** React, Axios, Tailwind CSS
- **Backend:** Node.js, Express
- **Datenbank:** MongoDB mit Mongoose
- **Weitere Tools:** Axios für API-Requests, Nodemon für automatisches Backend-Reloading

## 🛠 Installation & Setup

### Voraussetzungen

- Node.js installiert
- MongoDB installiert & gestartet (lokal oder über MongoDB Atlas)
- Git installiert

### 1. Repository klonen

Falls du das Projekt nutzen oder weiterentwickeln möchtest, klone es mit folgendem Befehl:

```bash
git clone https://github.com/Zulkerr/todo-app.git
cd todo-app
```

### 2. Backend installieren & starten

```bash
cd backend
npm install
npm start
```

### 3. Frontend installieren & starten

```bash
cd frontend
npm install
npm start
```

Die App ist dann unter **[http://localhost:3000/](http://localhost:3000/)** erreichbar.

## 📊 API-Endpunkte

### 1. Alle Aufgaben abrufen

```http
GET /api/tasks
```

### 2. Neue Aufgabe erstellen

```http
POST /api/tasks
```

**Body:** `{ "title": "Meine neue Aufgabe" }`

### 3. Aufgabe löschen

```http
DELETE /api/tasks/:id
```
## 📄 Lizenz

Dieses Projekt steht unter der **MIT-Lizenz**.

## 👨‍💻 Autor

[Zulker] - [Dein GitHub-Profil]

