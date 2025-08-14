---
title: 'Slack-MSJ-Ticket - Automatización de Notificaciones de Tickets con Webhooks'
description: 'Sistema automatizado de integración entre InvGate e Slack para notificaciones automáticas de tickets y gestión de assets'
pubDate: '2025-05-15'
heroImage: '/Slack-Invgate.png'
---

## Descripción del Proyecto

Slack-MSJ-Ticket nació de la necesidad real de Mesa de Ayuda (MDA) en mi último empleo, donde se realizaba de manera manual el envío de mensajes a cada usuario cuando se generaba un ticket. Llegó un punto donde esta tarea demandaba demasiado tiempo para algo tan posible de automatizar, afectando la productividad del equipo y la velocidad de respuesta a los usuarios.

El sistema utiliza APIs REST y procesamiento automático para gestionar tickets, aprobaciones y assets de computadoras, eliminando completamente la intervención manual en procesos críticos de soporte técnico. Desde InvGate se configuró una automatización nativa del software que detecta automáticamente cuando se genera un ticket con distintas condiciones (nuevo ticket, cambio de estado, asignación de agente, etc.) y envía directamente al webhook. Este recibe la información, la procesa apropiadamente según el tipo de evento, y envía la notificación correspondiente al canal de Slack de Mesa de Ayuda, manteniendo al equipo informado en tiempo real sin intervención manual.

El proyecto incluye múltiples interfaces de despliegue: una aplicación web Flask, contenedores Docker para producción, y servicios Windows nativos, proporcionando flexibilidad total en la implementación y mantenimiento del sistema.

## Tecnologías Utilizadas

- **Backend**: Python 3.9+, Flask, threading, signal handling
- **APIs**: InvGate REST API v2, Slack Web API, OAuth 2.0
- **Contenedores**: Docker, Docker Compose, Gunicorn
- **Túnel**: ngrok para exposición externa segura
- **Servicios**: NSSM para servicios Windows, logging rotativo
- **Interfaz**: API REST endpoints, sistema de logs estructurado
- **Despliegue**: Multiplataforma (Windows, Docker, standalone)

## Funcionalidades Principales

- **Gestión Automatizada de Tickets**: Notificaciones automáticas a Slack desde InvGate
- **Sistema de Aprobaciones Inteligente**: Asignación automática de aprobadores por ID
- **Gestión Automatizada de Assets**: Cambio automático de owner basado en último usuario logueado
- **Extracción Inteligente de Usernames**: Procesamiento automático del formato 'bidcom\usuario'
- **Múltiples Interfaces de Despliegue**: Web, Docker, Servicios Windows
- **Sistema de Logs Robusto**: Rotación automática con archivos estructurados
- **Validación Automática de Usuarios**: Búsqueda inteligente en base de datos de InvGate

## Arquitectura del Sistema

### **1. Servidor Webhook Principal (webhook_server.py)**
- **Framework**: Flask con arquitectura modular y endpoints especializados
- **APIs**: Integración nativa con InvGate y Slack
- **Funcionalidades**: Procesamiento de webhooks, gestión de assets, notificaciones automáticas
- **Logging**: Sistema rotativo con archivos de 10KB y backup automático

### **2. Sistema de Contenedores (Docker)**
- **Orquestación**: Docker Compose con servicios webhook-server y ngrok
- **Seguridad**: Usuario no-root, healthchecks, reinicio automático
- **Portabilidad**: Despliegue multiplataforma con persistencia de logs

### **3. Servicios Windows Nativos (NSSM)**
- **Instalación**: Scripts automatizados para servicios del sistema
- **Gestión**: Control de logs, reinicio automático, monitoreo del sistema
- **Integración**: Túnel ngrok con reinicio programado cada 1h45m

## Desafíos Técnicos

- **Integración Multi-API**: Configuración y optimización de APIs de InvGate y Slack
- **Gestión de Credenciales**: Implementación de autenticación OAuth 2.0 y Basic Auth
- **Procesamiento de Texto**: Extracción inteligente de usernames desde formatos de dominio
- **Sistema de Logs**: Implementación de rotación automática con backup
- **Despliegue Multiplataforma**: Consistencia entre entornos Docker, Windows y standalone
- **Gestión de Errores**: Control robusto de timeouts, conexiones fallidas y validaciones
- **Túnel Externo**: Configuración automática de ngrok con reinicio programado

## Resultados

- **Sistema Completamente Operativo**: Webhooks funcionando en producción con InvGate
- **Automatización Total**: Desde la detección de cambios hasta la notificación en Slack
- **Gestión Inteligente de Assets**: Cambio automático de ownership basado en uso real
- **Múltiples Opciones de Despliegue**: Docker, Windows Services, standalone
- **Integración Empresarial**: Conectividad directa con sistemas InvGate existentes
- **Monitoreo Completo**: Logs estructurados y endpoints de estado del sistema
- **Escalabilidad**: Arquitectura preparada para múltiples instancias y entornos
- **Ahorro de Tiempo**: Eliminación completa de tareas manuales de notificación

## Aprendizajes

- **Integración de APIs Empresariales**: Configuración y optimización de InvGate REST API
- **Desarrollo de Webhooks Robusto**: Manejo de eventos, validación y procesamiento automático
- **Arquitectura de Microservicios**: Contenedores Docker con orquestación automática
- **Servicios del Sistema Windows**: Implementación con NSSM y gestión de logs
- **Túneles Externos**: Configuración automática de ngrok con reinicio programado
- **Logging Estructurado**: Sistemas de rotación y backup automático
- **Despliegue Multiplataforma**: Consistencia entre entornos Docker y nativos
- **Automatización de Procesos**: Transformación de tareas manuales en flujos automáticos

## Casos de Uso

- **Soporte Técnico Automatizado**: Notificaciones instantáneas de tickets a Slack

- **Flujos de Aprobación**: Notificaciones automáticas a aprobadores designados
- **Auditoría y Seguimiento**: Logs completos de todas las operaciones del sistema
- **Integración Empresarial**: Conectividad directa con sistemas de gestión existentes

- **Mesa de Ayuda Eficiente**: Reducción de tiempo de respuesta y mejora en la experiencia del usuario

## Futuras Implementaciones

### **Integración Avanzada con InvGate**
El proyecto está preparado para avanzar hacia una implementación completa con funcionalidades avanzadas de InvGate, permitiendo:
- **Gestión Automatizada de Tickets**: Creación, actualización y seguimiento automático
- **Workflows Inteligentes**: Automatización completa de flujos de aprobación
- **Gestión de Assets Avanzada**: Inventario automático y asignación inteligente
- **Integración con Active Directory**: Validación automática de usuarios del dominio
- **Dashboard de Monitoreo**: Interfaz web para gestión y seguimiento del sistema


Esta implementación transformaría Slack-MSJ-Ticket en una solución enterprise completa, conectando la automatización de webhooks con sistemas de gestión empresarial avanzados.

## Enlaces del Proyecto

**💻 Código Fuente**: [Ver en GitHub](https://github.com/Gandara03/webhookSlackInvgate)

## 📱 Ejemplo de Mensaje Automático en Slack

### **Notificación de Ticket Generado Automáticamente**
![Mensaje Automático de Ticket](/MSJSlack.png)

*Ejemplo de notificación automática enviada desde InvGate a Slack a través del webhook*

### **Características del Mensaje Automático:**
- **Origen**: Sistema InvGate detecta automáticamente el nuevo ticket
- **Procesamiento**: Webhook recibe y procesa la información en tiempo real
- **Destino**: Canal de Mesa de Ayuda en Slack
- **Contenido**: Información completa del ticket (usuario, asunto, prioridad)
- **Formato**: Estructurado y legible para el equipo de soporte
- **Tiempo**: Notificación instantánea sin intervención manual
- **Automatización**: Proceso completo desde la detección hasta la notificación



 