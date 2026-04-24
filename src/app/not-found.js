import NotFoundClient from '../components/NotFoundClient';

export const metadata = {
  title: '404 - Page Not Found',
  description: "The page you're looking for doesn't exist. Explore FEAR Agency's services, blogs, and portfolio.",
};

export default function NotFound() {
  return <NotFoundClient />;
}
