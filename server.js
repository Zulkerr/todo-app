// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// MongoDB verbinden
mongoose.connect("mongodb://127.0.0.1:27017/todo-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ MongoDB verbunden!");
}).catch((err) => {
    console.error("❌ MongoDB Verbindungsfehler:", err);
});

// Aufgaben-Schema und Modell
const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
});

const Task = mongoose.model('Task', TaskSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API-Routen
// Holen der Aufgaben
app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error("❌ Fehler beim Abrufen der Aufgaben:", error);
        res.status(500).json({ message: 'Fehler beim Abrufen der Aufgaben', error: error.message });
    }
});

app.post('/api/tasks', async (req, res) => {
    try {
        console.log("📥 Neue Aufgabe wird hinzugefügt:", req.body); // Debug-Log
        const newTask = new Task({
            title: req.body.title,
            completed: false,
        });
        await newTask.save();
        res.json(newTask);
    } catch (error) {
        console.error("❌ Fehler beim Erstellen der Aufgabe:", error);
        res.status(500).json({ message: 'Fehler beim Erstellen der Aufgabe', error: error.message });
    }
});


// Löschen einer Aufgabe
app.delete('/api/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Aufgabe gelöscht' });
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Löschen der Aufgabe', error });
    }
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
