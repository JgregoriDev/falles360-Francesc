import {
  TablaPrecios,
  Coins,
  FAQList,
  Beneficios,
  Sponsors,
} from "@/components";

export const Home = () => {
    return (
        <div>
                       <Coins />
                      <Beneficios />
                      <TablaPrecios />
                      <Sponsors />
                      <FAQList />
        </div>
    )
}
