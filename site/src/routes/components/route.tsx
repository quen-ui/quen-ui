import { createFileRoute } from '@tanstack/react-router'
import Layout from "../../components/Layout/Layout";

export const Route = createFileRoute('/components')({
  component: Layout,
})
