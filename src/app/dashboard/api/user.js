// server-side or API route code
import { auth } from '@clerk/nextjs';

export async function getServerSideProps() {
    const { userId } = auth();
    return { props: { userId } };
}
