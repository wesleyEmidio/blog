// Importa a biblioteca clsx para combinar classes CSS de forma condicional e segura
import clsx from "clsx";

// Importa o hook useId do React para gerar IDs únicos para acessibilidade
import { useId } from "react";

// Define o tipo TypeScript para as props do componente InputCheckbox
type InputCheckboxProps = {
  // labelText: texto opcional que aparece ao lado do checkbox
  labelText?: string;
  // type: tipo do input (padrão é "checkbox", mas é configurável)
  type?: "checkbox";
  // Combina todas as props acima com as props padrão de um elemento HTML input
} & React.ComponentProps<"input">;

// Exporta o componente funcional InputCheckbox para ser usado em outros arquivos
export function InputCheckbox({
  // labelText: desestrutura a prop labelText com valor padrão de string vazia
  labelText = "",
  // type: desestrutura a prop type com valor padrão de "checkbox"
  type = "checkbox",
  // ...props: captura todas as outras props passadas (onChange, value, disabled, etc.)
  ...props
}: InputCheckboxProps) {
  // Gera um ID único usando o hook useId do React para conectar o input ao label
  const id = useId();

  // Retorna o JSX que será renderizado na tela
  return (
    // div container com flexbox para alinhar o input e o label lado a lado
    <div className="flex items-center gap-3">
      {/* Input do tipo checkbox com as propiedades configuradas */}
      <input
        // Spread das props capturadas (onChange, value, disabled, checked, etc.)
        {...props}
        // className: combina classes CSS base com classes customizadas usando clsx
        className={clsx(
          // Classes base: w-4 h-4 (tamanho 4x4), sem outline, ring azul on focus
          "w-4 h-4 outline-none focus:ring-2 focus:ring-blue-500",
          // Adiciona qualquer classe extra passada via props
          props.className,
        )}
        // id: atribui o ID único gerado pelo useId para acessibilidade
        id={id}
        // type: define o tipo do input como checkbox (ou outro valor passado)
        type={type}
      />

      {/* Renderiza o label APENAS se labelText for truthy (não vazio) */}
      {labelText && (
        // Label conectado ao input via htmlFor para melhor acessibilidade
        <label className="text-sm" htmlFor={id}>
          {/* Exibe o texto do label */}
          {labelText}
        </label>
      )}
    </div>
  );
  // Fim do componente
}
