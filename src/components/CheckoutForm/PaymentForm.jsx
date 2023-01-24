import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Método de Pago (Nequi)
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Nombre del Titular"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Número de Comprobante de Transacción"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="Fecha de Transacción"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="Celular"
                        helperText="Desde el cuál se hizo la transferencia"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}