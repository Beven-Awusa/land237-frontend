import { Box, useTheme, Skeleton } from "@mui/material";
import Container from "../../common/Container";
import { useEffect, useState } from "react";
import { LazyCard } from "../../common/LazyCard";


export default function Properties() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      const dummyData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        image: `https://picsum.photos/300/150?random=${i + 1}`,
      }));
      setProperties(dummyData);
      setLoading(false);
    }, 1500); // simulate network delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Box
        sx={{
          py: 4,
          backgroundColor: theme.palette.primary.main,
          minHeight: "50vh",
        }}
      >
        <Container>
          <h1 className="text-3xl font-bold text-white">Properties</h1>
        </Container>
      </Box>

      <Container>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  width="100%"
                  height={150}
                  className="rounded-lg"
                />
              ))
            : properties.map((prop) => (
                <LazyCard key={prop.id} image={prop.image} index={prop.id} />
              ))}
        </div>
      </Container>
    </>
  );
}

