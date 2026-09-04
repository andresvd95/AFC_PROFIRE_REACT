import { useParams } from 'react-router-dom'
import { getServiceDetail } from '../data/servicesDetail'
import ServiceDetailLayout from '../components/ServiceDetailLayout'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const rec = getServiceDetail(slug)
  if (!rec) return <NotFound />
  return (
    <div data-testid="service-detail">
      <ServiceDetailLayout rec={rec} />
    </div>
  )
}
