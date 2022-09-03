import { Fragment } from "react";
import { Box, Card, CardContent, CardMedia, Container, IconButton, Typography } from "@mui/material";

export default function Introduce({ children }) {
  return (
    <Fragment>
      <Container fixed sx={{bgcolor: '#cfe8fc'}}>
        <header>
          <Card sx={{ display: 'flex' }} elevation={0}>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image="/profile_image.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Mac Miller
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </header>
        <main>
          <section>
            <article></article>
            <article></article>
          </section>

          <section>
            <section>
              <article></article>
              <article></article>
            </section>
            <section>
              <article></article>
            </section>
          </section>
        </main>
      </Container>
    </Fragment>
  )
}
