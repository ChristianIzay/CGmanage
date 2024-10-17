# def chiffrer_substitution(texte, cle):
#     """Chiffre un texte avec un chiffrement par substitution simple.

#     Args:
#         texte (str): Le texte à chiffrer.
#         cle (str): La clé de substitution (un alphabet mélangé).

#     Returns:
#         str: Le texte chiffré.
#     """

#     alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
#     texte_chiffre = ""
#     for caractere in texte.upper():
#         if caractere in alphabet:
#             indice = alphabet.index(caractere)
#             texte_chiffre += cle[indice]
#         else:
#             texte_chiffre += caractere
#     return texte_chiffre

# # Exemple d'utilisation
# cle = "ZXYWVTUSRQPONMLKJIHGFEDCBA"
# texte = "Bonjour le monde!"
# texte_chiffre = chiffrer_substitution(texte, cle)
# print(texte_chiffre)

def chiffrer_substitution(texte, cle):
    """Chiffre un texte avec un chiffrement par substitution simple.

    Args:
        texte (str): Le texte à chiffrer.
        cle (str): La clé de substitution (un alphabet mélangé).

    Returns:
        str: Le texte chiffré.
    """

    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    texte_chiffre = ""
    for caractere in texte.upper():
        if caractere in alphabet:
            indice = alphabet.index(caractere)
            texte_chiffre += cle[indice]
        else:
            texte_chiffre += caractere
    return texte_chiffre

# Exemple d'utilisation
cle = "ZXYWVTUSRQPONMLKJIHGFEDCBA"
texte ="Christian Izay"
texte_chiffre = chiffrer_substitution(texte, cle)
print(texte_chiffre)