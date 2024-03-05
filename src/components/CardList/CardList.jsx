import CardOverview from './CardOverview';

export default function CardList({ CardListName, recipients }) {
  return (
    <section>
      <h1>{CardListName}</h1>
      <div>
        {recipients.map((recipient) => (
          <CardOverview key={recipient.id} recipient={recipient} />
        ))}
      </div>
    </section>
  );
}
