#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>


int main(int argc, char const *argv[])
{
    char entrada[20];
    int total, packs, resto;

    while (1)
    {
        printf("\nConverter total em packs\n");
        printf("Digite um numero ou uma letra para inverter: ");
        scanf("%19s", entrada);

        // Se for um número
        if (isdigit(entrada[0]))
        {
            total = atoi(entrada);

            packs = total / 64;
            resto = total % 64;

            printf("Packs: %d\n", packs);
            printf("Resto: %d\n", resto);
        }
        // Se for uma letra
        else
        {
            printf("\nConverter packs em total\n");

            printf("Digite a quantidade de packs ou uma letra para voltar: ");
            scanf("%19s", entrada);

            // Se digitou uma letra, volta para o primeiro menu
            if (!isdigit(entrada[0]))
            {
                continue;
            }

            packs = atoi(entrada);

            printf("Digite o resto: ");
            scanf("%d", &resto);

            total = (packs * 64) + resto;

            printf("Total: %d\n", total);
        }
    }

    return 0;
}