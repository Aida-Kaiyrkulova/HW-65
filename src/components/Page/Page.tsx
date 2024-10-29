import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress, Container } from "@mui/material";
import axiosApi from "../../axiosApi.ts";

interface PageData {
  title: string;
  content: string;
}

const Page: React.FC = () => {
  const { pageName } = useParams();
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!pageName) {
        setLoading(false);
        return;
      }

      try {
        const response = await axiosApi.get(`/pages/.json`);
        const data = response.data;

        const currentPageData = data[pageName];
        if (currentPageData) {
          setPageData(currentPageData);
        } else {
          setPageData(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageName]);

  if (loading) return <CircularProgress />;

  if (!pageData) return <div>Page not found</div>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{pageData.title}</Typography>
      <Typography>{pageData.content}</Typography>
    </Container>
  );
};

export default Page;