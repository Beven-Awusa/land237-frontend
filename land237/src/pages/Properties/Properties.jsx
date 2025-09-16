import {
  Box,
  useTheme,
  Skeleton,
  Input,
  Pagination,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Container from "../../common/Container";
import { useEffect, useState } from "react";
import { LazyCard } from "../../common/LazyCard";

export default function Properties() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [tag, setTag] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

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
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#002912e1] h-[40vh] w-full py-4">
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="text-center flex justify-center flex-col items-center pt-10">
              <h1 className="text-white text-4xl font-bold sm:text-5xl">
                Our Listed Properties
              </h1>
              <p className="text-white mt-2">
                Explore our diverse range of properties available for sale and
                rent.
              </p>
              <Input
                type="text"
                placeholder="Search properties"
                className="mt-4"
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  paddingX: 2,
                  width: { xs: "80%", sm: "700px" },
                  height: 40,
                }}
              />
            </div>
          </Container>
        </div>
      </Box>

      {/* Filters Section */}
      <Container>
        <h4 className="font-bold text-3xl my-8">Filter</h4>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Category Filter */}
          <FormControl fullWidth>
            <InputLabel
              id="category-select-label"
              sx={{
                backgroundColor: theme.palette.background.default,
                paddingInline: "0.5rem",
              }}
            >
              Categories
            </InputLabel>
            <Select
              labelId="category-select-label"
              value={category}
              onChange={handleCategoryChange}
            >
              <MenuItem value="apartment">Apartment</MenuItem>
              <MenuItem value="villa">Villa</MenuItem>
              <MenuItem value="studio">Studio</MenuItem>
            </Select>
          </FormControl>

          {/* Location Filter */}
          <FormControl fullWidth>
            <InputLabel
              id="location-select-label"
              sx={{
                backgroundColor: theme.palette.background.default,
                paddingInline: "0.5rem",
              }}
            >
              Locations
            </InputLabel>
            <Select
              labelId="location-select-label"
              value={location}
              onChange={handleLocationChange}
            >
              <MenuItem value="new-york">New York</MenuItem>
              <MenuItem value="paris">Paris</MenuItem>
              <MenuItem value="lagos">Lagos</MenuItem>
            </Select>
          </FormControl>

          {/* Tag Filter */}
          <FormControl fullWidth>
            <InputLabel
              id="tag-select-label"
              sx={{
                backgroundColor: theme.palette.background.default,
                paddingInline: "0.5rem",
              }}
            >
              Tags
            </InputLabel>
            <Select
              labelId="tag-select-label"
              value={tag}
              onChange={handleTagChange}
            >
              <MenuItem value="sale">Sale</MenuItem>
              <MenuItem value="rent">Rent</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Container>

      {/* Properties Grid */}
      <Container>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  width="100%"
                  height={180}
                  animation="wave"
                  className="rounded-lg"
                />
              ))
            : properties.map((prop) => (
                <LazyCard key={prop.id} image={prop.image} index={prop.id} />
              ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-8">
          <Pagination count={10} color="primary" size="large" />
        </div>
      </Container>
    </>
  );
}
