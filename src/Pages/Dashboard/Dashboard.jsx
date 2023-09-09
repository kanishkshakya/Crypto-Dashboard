import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../component/DashboardLayout";
import PriceSection from "./component/PriceSection";
import PortfolioSection from "./component/portfolioSection";
import Transaction from "./component/Transaction";
import InfoCard from "./component/InfoCard";

const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repear(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={2.5}
      >
        <GridItem
          colSpan={{
            base: "1",
            xl: "2",
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl={"/dot_bg.svg"}
            text="Learn more about Loans - keep you Bitcoin, access it's value without
        selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            imgUrl={"/grid_bg.svg"}
            tagText="Contact"
            text="Learn more about real estate, mortgage and corporate account services"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
