import sqlite3

def delete_by_id(record_id):
    conn = sqlite3.connect("podologia.db")
    cursor = conn.cursor()

    cursor.execute("DELETE FROM consultas_podologia WHERE id = ?", (record_id,))
    conn.commit()

    if cursor.rowcount > 0:
        print(f"✅ Consulta con ID {record_id} eliminada exitosamente.")
    else:
        print(f"❌ No se encontró consulta con ID {record_id}.")

    conn.close()

def delete_all():
    conn = sqlite3.connect("podologia.db")
    cursor = conn.cursor()

    confirm = input("⚠️ ¿Estás SEGURO de eliminar TODAS las consultas? (s/n): ")
    if confirm.lower() == "s":
        cursor.execute("DELETE FROM consultas_podologia")
        conn.commit()
        print("✅ Todas las consultas han sido eliminadas.")
    else:
        print("❌ Operación cancelada.")

    conn.close()

if __name__ == "__main__":
    print("\n🔧 Administrador de Consultas de Podología\n")
    print("1. Eliminar consulta por ID")
    print("2. Eliminar TODAS las consultas")
    
    choice = input("Seleccione opción (1/2): ")
    
    if choice == "1":
        record_id = input("Ingrese ID de la consulta a eliminar: ")
        delete_by_id(record_id)
    elif choice == "2":
        delete_all()
    else:
        print("❌ Opción no válida")