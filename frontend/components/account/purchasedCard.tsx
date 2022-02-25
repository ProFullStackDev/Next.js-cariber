import Moment from 'moment';

interface PurchasedCardProps {
  data: string;
  offer: string;
  price: string;
  product: string;
}

export default function PurchasedCard({ data, offer, price, product }: PurchasedCardProps) {
  return (
    <div className="well m-b-20">
      <div className="row">
        <dl className="col-6">
          <dt>
            Purchased
          </dt>
          <dd>
            {Moment(data).format('DD/MM/YYYY')}
          </dd>
        </dl>
        <dl className="col-6">
          <dt>
            Offer
          </dt>
          <dd>
            {offer}
          </dd>
        </dl>
        <dl className="col-6">
          <dt>
            Price
          </dt>
          <dd>
            {price}
          </dd>
        </dl>
        <dl className="col-6">
          <dt>
            Product
          </dt>
          <dd>
            {product}
          </dd>
        </dl>
      </div>
    </div>
  )
}