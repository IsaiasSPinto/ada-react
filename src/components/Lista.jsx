import { useEffect, useState } from "react";

export default function MinhaList() {
  const list = [
    { id: 1, nome: "item 1", completo: false },
    { id: 2, nome: "item 2", completo: true },
    { id: 3, nome: "item 3", completo: false },
  ];

  const [products, setProducts] = useState(list);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if (pesquisa) {
      setProducts(
        list.filter((item) => {
          return item.nome.toLowerCase().includes(pesquisa.toLowerCase());
        })
      );
    } else {
      setProducts(list);
    }
  }, [pesquisa]);

  return (
    <div>
      <input
        placeholder="pesquise aqui"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />

      {products.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.nome}</h4>
          </div>
        );
      })}
    </div>
  );
}
