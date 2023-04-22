import app from './app.js';
import { PORT } from './config.js'

// Configuración del puerto;
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));