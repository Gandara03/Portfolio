---
title: 'GenTicketsIA - Sistema de Generación Inteligente de Tickets con IA'
description: 'Sistema inteligente para generar tickets de soporte técnico utilizando Google Gemini con interfaces web y desktop'
pubDate: '2025-06-20'
heroImage: '/GenticketIA.png'
---

## Descripción del Proyecto

GenTicketsIA nació de la idea de crear un generador gramatical y descripción de tickets inteligente que aprende de todos los tickets previamente creados almacenados en una base de datos. El sistema utiliza Inteligencia Artificial (Google Gemini) para generar tickets automáticamente basándose en ejemplos históricos y la conversación comentada.

El proyecto incluye dos interfaces: una aplicación web desarrollada con Flask y una aplicación de escritorio con Tkinter, ambas integrando la misma lógica de IA para proporcionar flexibilidad en el uso y despliegue.

## Tecnologías Utilizadas

- **Backend**: Python 3.8+, Flask, Tkinter
- **IA**: Google Generative AI (Gemini 2.0 Flash)
- **Procesamiento de Datos**: openpyxl, pandas, regex
- **Interfaz Web**: Bootstrap 5, HTML/CSS, JavaScript
- **Interfaz Desktop**: Tkinter con tema oscuro
- **Base de Datos**: Excel (Tickets_1.xlsx) con sistema de relevancia semántica
- **Despliegue**: Gunicorn, Render, variables de entorno
- **Herramientas**: API REST, manejo de errores, validación de claves

## Funcionalidades Principales

- **Generación Automática de Tickets**: Creación inteligente desde conversaciones de chat
- **Selección Inteligente de Ejemplos**: Algoritmo de relevancia semántica para ejemplos históricos
- **Asignación Automática de Agentes**: Mapeo inteligente basado en patrones de tickets anteriores
- **Doble Interfaz**: Aplicación web Flask y aplicación desktop Tkinter
- **Sistema de Almacenamiento**: Guardado en formato TXT con historial completo
- **Detección Automática**: Patrones regex para identificar solicitantes y categorías
- **Exportación Múltiple**: Formatos TXT y CSV para diferentes necesidades

## Arquitectura del Sistema

### **1. Aplicación Web (app.py)**
- **Framework**: Flask con arquitectura modular
- **IA**: Integración con Google Gemini 2.0 Flash
- **Base de Datos**: Archivo Excel con sistema de relevancia por palabras clave
- **Funcionalidades**: Generación automática, selección inteligente, asignación de agentes

### **2. Aplicación de Escritorio (TicketGUI.py)**
- **Framework**: Tkinter con interfaz gráfica moderna
- **Lógica de IA**: Misma implementación que la versión web
- **Características Adicionales**: Copiado al portapapeles, vista de prompts, gestión de historial



## Desafíos Técnicos

- **Integración de IA**: Configuración y optimización de Google Gemini API
- **Algoritmo de Relevancia**: Implementación de selección semántica inteligente de ejemplos
- **Doble Interfaz**: Mantenimiento de consistencia entre versión web y desktop
- **Procesamiento de Texto**: Normalización, eliminación de stopwords y extracción de patrones
- **Gestión de Base de Datos**: Sistema de relevancia basado en palabras clave en Excel
- **Validación y Manejo de Errores**: Control de API keys y gestión de fallos de conexión
- **Exportación de Datos**: Generación de múltiples formatos (TXT, CSV) con estructura consistente

## Resultados

- **Sistema Completamente Funcional**: Aplicación web y desktop operativas
- **IA Integrada**: Generación automática de tickets con Google Gemini
- **Base de Ejemplos Inteligente**: Sistema de relevancia semántica operativo
- **Interfaz Moderna**: Tema oscuro responsive con Bootstrap 5
- **Automatización Completa**: Desde la conversación hasta el ticket generado
- **Sistema de Almacenamiento**: Historial completo y exportación múltiple
- **Asignación Inteligente**: Mapeo automático de agentes basado en patrones históricos

## Aprendizajes

- **Integración de APIs de IA**: Configuración y optimización de Google Gemini
- **Desarrollo Multiplataforma**: Consistencia entre interfaces web y desktop
- **Algoritmos de Relevancia Semántica**: Implementación de sistemas de búsqueda inteligente
- **Procesamiento de Texto Avanzado**: Normalización, patrones regex y extracción de datos
- **Gestión de Base de Datos en Excel**: Sistemas de relevancia y mapeo de usuarios
- **Interfaces de Usuario Modernas**: Bootstrap 5, Tkinter con temas personalizados
- **Despliegue y CI/CD**: Configuración de Gunicorn, Render y variables de entorno

## Casos de Uso

- **Soporte Técnico**: Generación automática de tickets desde conversaciones de chat
- **Gestión de Incidentes**: Clasificación y asignación automática de agentes
- **Documentación**: Archivo de tickets para auditoría y seguimiento
- **Entrenamiento**: Base de ejemplos para mejorar continuamente la IA
- **Automatización**: Reducción de tiempo en creación manual de tickets

## Futuras Implementaciones

### **Integración con API InvGate**
El proyecto está preparado para avanzar hacia una implementación completa con la API de InvGate, permitiendo:
- **Carga Automática de Tickets**: Sincronización en tiempo real con el sistema de tickets
- **Gestión Centralizada**: Unificación de tickets generados y existentes
- **Flujo de Trabajo Automatizado**: Desde la generación hasta la creación en InvGate
- **Seguimiento de Estado**: Monitoreo de tickets desde su creación hasta su resolución
- **Integración con Workflows**: Automatización completa del proceso de soporte técnico

Esta implementación transformaría GenTicketsIA en una solución enterprise completa, conectando la generación inteligente de tickets con sistemas de gestión empresarial existentes.

## Enlaces del Proyecto

## 📱 Interfaces del Sistema

### **1. Interfaz Web - Aplicación Flask**
![Interfaz Web GenticketIA](/InterfazWEB.png)

*Interfaz web moderna desarrollada con Flask y Bootstrap 5 para generación de tickets*

### **2. Interfaz Local - Aplicación Desktop**
![Interfaz Local GenticketIA](/InterfazLocal.png)

*Aplicación de escritorio con Tkinter y tema oscuro para uso local*

### **Características de las Interfaces:**
- **Interfaz Web**: Responsive, moderna, accesible desde cualquier dispositivo
- **Interfaz Local**: Tema oscuro, funcionalidades avanzadas, copiado al portapapeles
- **Consistencia**: Misma lógica de IA en ambas plataformas
- **Flexibilidad**: Uso web para equipos, uso local para usuarios individuales

## 📋 Ejemplo de Ticket Generado

### **Resultado del Sistema de IA**
![Ejemplo de Ticket Generado](/Ejemplo%20de%20ticket%20generado.png)

*Ticket generado automáticamente por GenTicketsIA utilizando Google Gemini*

### **Características del Ticket Generado:**
- **Formato Profesional**: Estructura clara y organizada
- **Información Completa**: Detalles del problema, solicitante y prioridad
- **Asignación Automática**: Agente asignado inteligentemente por el sistema
- **Categorización**: Clasificación automática del tipo de incidente
- **Descripción Técnica**: Explicación detallada generada por IA

**🌐 Sitio Web en Producción**: [https://genticket.onrender.com/](https://genticket.onrender.com/)

 