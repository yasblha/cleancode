// src/App.tsx
import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Button,
    Box
} from '@mui/material';
import './App.css';

const App: React.FC = () => {
    return (
        <>
            {/* Header avec AppBar */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Gestion de Flotte - Triumph Motorcycles
                    </Typography>
                    <Button color="inherit">Connexion</Button>
                </Toolbar>
            </AppBar>

            {/* Contenu principal */}
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h3" gutterBottom>
                        Bienvenue sur la plateforme
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Suivi, entretien et gestion optimisée de vos motos
                    </Typography>
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" color="primary" fullWidth size="large">
                            Motos
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" color="secondary" fullWidth size="large">
                            Entretiens
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" color="success" fullWidth size="large">
                            Pièces détachées
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default App;
