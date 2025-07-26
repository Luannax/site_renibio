# 📸 EXEMPLO: Como usar múltiplas fotos

## 🎯 Cenários de Uso

### Cenário 1: APENAS 1 foto por produto
```
images/
├── kombucha-1.jpg
├── kefir-1.jpg
└── pao-integral-1.jpg
```
**Resultado**: Mostra apenas a foto, sem navegação

---

### Cenário 2: MÚLTIPLAS fotos para alguns produtos
```
images/
├── kombucha-1.jpg      ← Foto principal
├── kombucha-2.jpg      ← Detalhe do rótulo
├── kombucha-3.jpg      ← Pessoa bebendo
├── kefir-1.jpg         ← Só 1 foto
└── pao-integral-1.jpg  ← Só 1 foto
```
**Resultado**: 
- Kombucha = carrossel com 3 fotos
- Kefir e Pão = apenas 1 foto cada

---

### Cenário 3: TODAS com múltiplas fotos
```
images/
├── kombucha-1.jpg      ← Garrafa inteira
├── kombucha-2.jpg      ← Cor do líquido
├── kombucha-3.jpg      ← Em uso
├── kefir-1.jpg         ← Pote fechado
├── kefir-2.jpg         ← Textura cremosa
├── pao-integral-1.jpg  ← Pão inteiro
├── pao-integral-2.jpg  ← Fatia cortada
└── pao-integral-3.jpg  ← Ingredientes
```
**Resultado**: Todos os produtos com carrossel completo

## 🎮 Funcionalidades Automáticas

✅ **Auto-detecção**: O site detecta quantas fotos cada produto tem
✅ **Carrossel inteligente**: Só aparece se houver 2+ fotos
✅ **Auto-play**: Muda foto a cada 5 segundos (para quando hover)
✅ **Navegação**: Setas laterais + pontos indicadores
✅ **Responsivo**: Funciona em celular e desktop
✅ **Fallback**: Se foto não carregar, usa a próxima ou ícone

## 💡 Dicas Práticas

### Para Kombucha:
1. **Foto 1**: Garrafa completa com rótulo visível
2. **Foto 2**: Close da cor/textura do líquido
3. **Foto 3**: Momento de consumo ou ingredientes

### Para Kefir:
1. **Foto 1**: Pote fechado/embalagem
2. **Foto 2**: Textura cremosa em colher ou tigela

### Para Pão Integral:
1. **Foto 1**: Pão inteiro/formato
2. **Foto 2**: Fatia cortada mostrando miolo
3. **Foto 3**: Ingredientes naturais usados

## 🚀 Como Implementar

1. **Tire as fotos** seguindo as sugestões acima
2. **Redimensione para 400x400px** (quadrada)
3. **Comprima** para máximo 500KB cada
4. **Nomeie corretamente**: produto-numero.jpg
5. **Salve na pasta images/**
6. **Teste no navegador**

O sistema é **100% automático** - você só precisa adicionar as fotos com os nomes corretos! 🎯
