import { Tabs } from "radix-ui";
import HomePage from "../../pages/HomePage";

export default function Tabsbar() {
    return (
        <Tabs.Root>
            <Tabs.List>
                <Tabs.TabsTrigger value="HomePage">Home Page</Tabs.TabsTrigger>
            </Tabs.List>
            <Tabs.Content value="HomePage">
                <HomePage />
            </Tabs.Content>
        </Tabs.Root>
    )
}