import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Video } from "../components/video";

export function Event(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            <main className="flex flex-1">
                <Video/>
                <Sidebar/>
            </main>
        </div>
    )
}