import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../component/DashboardLayout";
import PriceSection from "./component/PriceSection";
import PortfolioSection from "./component/portfolioSection";

const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repear(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
