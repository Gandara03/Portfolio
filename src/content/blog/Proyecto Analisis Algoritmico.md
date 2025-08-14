---
title: 'Implementación de TDAs y Algoritmos en Java'
description: 'Implementación completa de TDAs fundamentales, exploración de implementaciones acotadas vs. dinámicas y desarrollo de estructuras de datos robustas en Java'
pubDate: '2024-06-15'
heroImage: '/Ejercicios Java.png'
---

## Descripción del Proyecto

Este proyecto implementa un conjunto completo de estructuras de datos fundamentales y TDAs (Tipos de Datos Abstractos), desde estructuras lineales básicas hasta grafos complejos y árboles balanceados. El objetivo es demostrar la implementación práctica de TDAs, explorar diferentes enfoques de implementación (acotada vs. dinámica) y desarrollar habilidades en el diseño de estructuras de datos robustas.

El proyecto demuestra la evolución progresiva de conceptos de programación, aplicando principios de recursividad, algoritmos de balanceo y técnicas de preservación de datos en estructuras complejas.

## Tecnologías Utilizadas

- **Lenguajes**: Java (100%)
- **Algoritmos**: Recursividad, Backtracking, Búsqueda en profundidad, Algoritmos de balanceo
- **Estructuras**: Pilas, Colas, Conjuntos, Diccionarios, Árboles Binarios, Árboles AVL, Grafos, Heaps
- **Análisis**: Complejidad temporal y espacial, Métricas de rendimiento, Comparación de implementaciones
- **Testing**: Casos de prueba con múltiples configuraciones, Validación de operaciones
- **Arquitectura**: TDAs con implementaciones acotadas y dinámicas

## Funcionalidades Principales

### **1. TP1: Estructuras Lineales Fundamentales**
- **Implementación de Pilas**: Operaciones LIFO con preservación de datos
- **Implementación de Colas**: Operaciones FIFO con transferencia de elementos
- **Implementación de Colas de Prioridad**: Ordenamiento automático por prioridad
- **Algoritmos de Transferencia**: Preservación de estructuras originales durante operaciones

### **2. TP2: Estructuras de Conjuntos y Diccionarios**
- **Implementación de Conjuntos**: Operaciones de pertenencia y manipulación
- **Implementación de Diccionarios**: Estructuras clave-valor simples y múltiples
- **Comparación de Implementaciones**: Acotadas vs. dinámicas en memoria
- **Análisis de Costos**: Evaluación de complejidad operacional

### **3. TP3: Algoritmos Avanzados sobre Estructuras**
- **Verificación de Palíndromos**: Algoritmo de comparación bidireccional
- **Eliminación de Duplicados**: Preservación del primer elemento encontrado
- **Manipulación de Estructuras Auxiliares**: Preservación de datos originales
- **Algoritmos de Procesamiento**: Operaciones complejas sobre múltiples TDAs

### **4. TP4: Árboles Binarios de Búsqueda (ABB)**
- **Búsqueda Binaria Recursiva**: Implementación eficiente de búsqueda
- **Operaciones de Navegación**: Cálculo de profundidad, identificación de hojas
- **Métricas Arbóreas**: Conteo de elementos, suma total, altura del árbol
- **Comparación de Formas**: Análisis estructural entre árboles

### **5. TP5: Árboles AVL y Balanceo**
- **Implementación de Balanceo**: Rotaciones simples y dobles
- **Mantenimiento de Factor de Balance**: Control automático de desbalance
- **Operaciones de Inserción/Eliminación**: Con rebalanceo automático
- **Análisis de Complejidad**: Evaluación de rendimiento en operaciones

### **6. TP6: Grafos y Algoritmos de Grafos**
- **Representación de Grafos**: Matriz de adyacencia y listas
- **Algoritmos de Recorrido**: Búsqueda en profundidad y amplitud
- **Implementación de Heaps**: Montículos para ordenamiento
- **Análisis de Conectividad**: Vértices adyacentes y caminos

## Arquitectura del Sistema

### **1. Sistema de TDAs (Tipos de Datos Abstractos)**
- **Interfaces Bien Definidas**: Separación clara entre especificación e implementación
- **Implementaciones Múltiples**: Acotadas (memoria fija) y dinámicas (memoria variable)
- **Operaciones Estándar**: Inicialización, verificación de vacío, operaciones básicas

### **2. Estructura de Implementación**
- **Paquete api**: Definición de interfaces TDA
- **Paquete impl**: Implementaciones concretas de TDAs
- **Paquete app**: Aplicaciones y algoritmos de prueba
- **Paquete operacion**: Operaciones auxiliares sobre TDAs

### **3. Sistema de Preservación de Datos**
- **Estructuras Auxiliares**: Pilas y colas temporales para operaciones
- **Algoritmos de Restauración**: Preservación de datos originales
- **Operaciones No Destructivas**: Manipulación sin pérdida de información

## Desafíos Técnicos

### **1. Complejidad Algorítmica**
- **Manejo de Recursividad**: Control de stack en operaciones arbóreas profundas
- **Optimización de Operaciones**: Minimización de accesos a memoria
- **Balanceo de Estructuras**: Mantenimiento de propiedades de balance

### **2. Gestión de Memoria**
- **Implementaciones Acotadas**: Control de límites de memoria
- **Implementaciones Dinámicas**: Gestión eficiente de asignación/liberación
- **Prevención de Memory Leaks**: Limpieza adecuada de estructuras

### **3. Validación de Operaciones**
- **Verificación de Propiedades**: Mantenimiento de invariantes estructurales
- **Testing Exhaustivo**: Casos de prueba para todas las operaciones
- **Manejo de Errores**: Validación de parámetros y estados

## Resultados

### **1. Eficiencia Operacional**
- **Operaciones Básicas**: O(1) para acceso, inserción y eliminación en estructuras lineales
- **Operaciones Arbóreas**: O(log n) para búsqueda en ABB balanceado
- **Operaciones de Grafos**: O(V + E) para recorrido completo

### **2. Escalabilidad de Implementaciones**
- **Estructuras Acotadas**: Eficientes para conjuntos de datos conocidos
- **Estructuras Dinámicas**: Adaptables a conjuntos de datos variables
- **Árboles Balanceados**: Rendimiento consistente independientemente del orden de inserción

### **3. Análisis Comparativo**
- **Implementaciones Acotadas vs. Dinámicas**: Trade-offs entre memoria y flexibilidad
- **Estructuras Lineales vs. Arbóreas**: Comparación de complejidades operacionales
- **Algoritmos Iterativos vs. Recursivos**: Análisis de eficiencia y legibilidad

## Aprendizajes

### **1. Análisis de Complejidad**
- **Evaluación Práctica vs. Teórica**: Medición real de rendimiento algorítmico
- **Optimización de Algoritmos**: Impacto de decisiones de implementación
- **Comparación de Enfoques**: Análisis de diferentes estrategias algorítmicas

### **2. Diseño de Estructuras de Datos**
- **Separación de Responsabilidades**: Interfaces vs. implementaciones
- **Reutilización de Código**: Operaciones auxiliares compartidas
- **Mantenibilidad**: Código estructurado y documentado

### **3. Resolución de Problemas Algorítmicos**
- **Aplicación de TDAs**: Uso apropiado de estructuras para problemas específicos
- **Algoritmos de Preservación**: Técnicas para mantener integridad de datos
- **Testing y Validación**: Verificación exhaustiva de implementaciones

## Análisis Comparativo

### **1. Estructuras Lineales**
- **Complejidad**: O(1) para operaciones básicas
- **Eficiencia**: Óptima para operaciones de acceso secuencial
- **Característica**: Simplicidad de implementación y uso

### **2. Estructuras Arbóreas**
- **Complejidad**: O(log n) para operaciones balanceadas
- **Eficiencia**: Excelente para búsquedas y ordenamiento
- **Característica**: Balanceo automático y propiedades de orden

### **3. Estructuras de Grafos**
- **Complejidad**: O(V + E) para recorrido completo
- **Eficiencia**: Flexible para representar relaciones complejas
- **Característica**: Representación de conectividad y caminos

## Conclusión

Este proyecto demuestra la implementación exitosa de un conjunto completo de estructuras de datos fundamentales, desde estructuras lineales básicas hasta algoritmos avanzados sobre grafos y árboles balanceados. La arquitectura modular basada en TDAs permite una implementación clara y mantenible, mientras que la comparación entre implementaciones acotadas y dinámicas proporciona insights valiosos sobre trade-offs de diseño.

Los algoritmos implementados muestran la evolución progresiva de conceptos algorítmicos, desde operaciones básicas hasta técnicas avanzadas de balanceo y optimización. La aplicación de principios de análisis de complejidad y testing exhaustivo asegura la robustez y eficiencia de todas las implementaciones.

El proyecto sirve como base sólida para el estudio de estructuras de datos y algoritmos, proporcionando ejemplos prácticos de implementación y análisis comparativo de diferentes enfoques algorítmicos.

## Enlaces del Proyecto

**GitHub**: [Implementaciones completas en Java](https://github.com/Gandara03/TPProgra2) 