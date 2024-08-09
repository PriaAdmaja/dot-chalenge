import UserAuth from "@/component/UserAuth"

const Dashboard = () => {
    return <>dashboard</>
}

export default function Page() {
    return (
        <UserAuth>
            <Dashboard/>
        </UserAuth>
    )
}