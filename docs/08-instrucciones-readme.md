# Instrucciones para Actualizar GitHub Profile

## README del Proyecto Puente ✅

Ya está actualizado y pusheado. Incluye:

- Badges interactivos
- Tabla comparativa
- Diagrama Mermaid
- Barra de progreso
- Links a documentación
- Sección de VibeCoding

## README de Tu Perfil de GitHub

Para mostrar el buildathon en tu perfil de GitHub:

### Paso 1: Crear Repositorio Especial

GitHub muestra un README en tu perfil si creas un repositorio con tu mismo username.

```bash
# Ir a GitHub.com
# Click en "New repository"
# Repository name: LuisSambrano (tu username exacto)
# Description: "Mi perfil de GitHub"
# Public: ✅
# Add README: ✅
# Create repository
```

### Paso 2: Copiar Contenido

1. Abre `docs/PROFILE_README.md` en este repositorio
2. Copia TODO el contenido
3. Ve a tu repositorio `LuisSambrano/LuisSambrano`
4. Edita el README.md
5. Pega el contenido
6. Commit

### Paso 3: Personalizar

Actualiza estos campos:

**Email**:

```markdown
- 📧 Email: [Tu email aquí]
```

**GitHub Stats** (opcional):
Si quieres stats reales, las badges ya están configuradas.
Si no, puedes removerlas.

**Links**:
Actualiza cuando tengas:

- Demo en vivo
- Video demo
- Karma Gap

### Resultado

Tu perfil mostrará:

- Participación en LatAm Hubs Buildathon
- Progreso de Puente (25%)
- Stack técnico
- Links al proyecto
- Stats de GitHub

## Actualizar Progreso

Cuando avances en el buildathon:

1. Actualiza la barra de progreso:

```markdown
[████████████░░░░░░░░░░░░░░░░] 40% Completado
```

2. Actualiza las fases:

```markdown
✅ Fase 0: Definición y Setup (100%)
✅ Fase 1: Aprendizaje Básico (100%)
⏳ Fase 2: MVP Básico (50%)
```

3. Actualiza los hitos:

```markdown
- [x] ✅ Celo Composer ejecutado
- [x] ✅ Primer componente con v0
- [ ] ⏳ Passport integrado
```

4. Actualiza stats en profile:

```markdown
| 📅 Días desde inicio | 15 |
| 💻 Commits | 20+ |
```

## Mantener Actualizado

**Frecuencia recomendada**:

- README de Puente: Cada semana o hito mayor
- README de perfil: Cada 2 semanas

**Qué actualizar**:

- Progreso (%)
- Hitos completados
- Stats de commits/docs
- Links cuando estén disponibles

## Tips

1. **Badges**: Usa https://shields.io para crear badges personalizados
2. **Mermaid**: GitHub renderiza diagramas Mermaid automáticamente
3. **Emojis**: Hacen el README más visual y atractivo
4. **Links**: Siempre usa paths relativos para docs internas

## Ejemplo de Actualización Semanal

```bash
cd /Users/luissambrano/Proyectos/Lab/puente

# Actualizar README.md
# Cambiar progreso de 25% a 35%
# Agregar nuevos hitos completados

git add README.md
git commit -m "docs: update progress to 35%"
git push

# Actualizar profile (si aplica)
# Ir a repo LuisSambrano/LuisSambrano
# Editar README.md
# Actualizar stats y progreso
```

---

**Próximo paso**: Crear el repositorio `LuisSambrano/LuisSambrano` cuando quieras activar tu profile README.
