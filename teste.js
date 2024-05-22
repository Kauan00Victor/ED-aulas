// # Inicialize uma lista vazia para armazenar os valores
valores = []

// # Solicite ao usuário inserir 20 valores reais
print("Insira 20 valores reais:")
contador = 0
while contador < 20:
    valor = float(input(f"Digite o {contador+1}º valor: "))
    valores.append(valor)
    contador += 1

// # Calcule o somatório dos valores
soma = 0
indice = 0
while indice < len(valores)
    soma += valores[indice]
    indice += 1

// # Imprima o resultado
print("O somatório dos valores é:", soma)

