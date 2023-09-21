import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [photosOrder, setPhotosOrder] = useState([]);
  const navigate = useNavigate();
  const accessKey = "ZUTaYrGd5t-t02j5cqG8VgNu2SPTPd--skZ6DPJBPKw";
  const apiUrl = "https://api.unsplash.com/collections";

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        });
        setIsLoading(false);
        const data = await response.json();
        setPhotos(data);
        console.log(photos);
        setPhotosOrder(data.map((photo) => photo.id));
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    };
    fetchPhotos();
  }, []);

  const handleSearchInput = () => {
    setSearchLoading(true);
    const filtered = photos.filter((photo) =>
      photo.tags.some((tag) => tag.title.includes(searchQuery))
    );
    setFilteredPhotos(filtered);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    // Update the order based on the drag and drop operation
    const newPhotosOrder = [...photosOrder];
    newPhotosOrder.splice(result.source.index, 1);
    newPhotosOrder.splice(result.destination.index, 0, result.draggableId);
    setPhotosOrder(newPhotosOrder);
  };

  const logoutHandler = () => {
    navigate('/')
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "center", marginBottom: "1rem" }}
          >
            SLACK Gallery
          </Typography>
          <Button onClick={logoutHandler}>Logout</Button>
        </div>
        <Typography sx={{ textAlign: "center", marginBottom: "1rem" }}>
          Drag-n-Drop
        </Typography>
        <Container maxWidth="md" style={{ width: "100%", margin: "auto" }}>
          <div style={{ display: "flex" }}>
            <input
              type="search"
              placeholder="Search photo"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderColor: "lightpink",
                outline: "none",
                borderRadius: "15px 0 0 15px",
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            />
            <IconButton
              style={{
                borderRadius: "0 15px 15px 0",
                backgroundColor: "lightpink",
                color: "white",
              }}
              onClick={handleSearchInput}
            >
              <SearchIcon />
            </IconButton>
          </div>
        </Container>

        {isLoading ? (
          <Loader />
        ) : (
          <Container maxWidth="lg" sx={{ paddingTop: "2rem" }}>
            {searchLoading ? (
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="search-photo-grid">
                  {(provided) => (
                    <Grid
                      container
                      spacing={1}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {filteredPhotos.map((photo, index) => {
                        {
                          /* const photo = photos.find((p) => p.id === photoId); */
                        }
                        {
                          /* if (!photo) return null; // Handle missing photos */
                        }
                        return (
                          <Draggable
                            key={photo.id}
                            draggableId={photo.id}
                            index={index}
                          >
                            {(provided) => (
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card photo={photo} />
                              </Grid>
                            )}
                          </Draggable>
                        );
                      })}
                    </Grid>
                  )}
                </Droppable>
              </DragDropContext>
            ) : (
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="all-photo-grid">
                  {(provided) => (
                    <Grid
                      container
                      spacing={1}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {photosOrder.slice(0, 6).map((photoId, index) => {
                        const photo = photos.find((p) => p.id === photoId);
                        if (!photo) return null; // Handle missing photos
                        return (
                          <Draggable
                            key={photo.id}
                            draggableId={photo.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Card photo={photo} />
                              </Grid>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </Grid>
                  )}
                </Droppable>
              </DragDropContext>
            )}
          </Container>
        )}
      </Container>
    </>
  );
};

export default Homepage;
